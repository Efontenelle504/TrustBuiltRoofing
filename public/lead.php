<?php
declare(strict_types=1);

$recipient = 'info@trustbuiltroofing.com';
$from = 'info@trustbuiltroofing.com';
$brand = 'Trust Built Roofing Co.';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /');
    exit;
}

if (!empty($_POST['bot-field'] ?? '')) {
    header('Location: /thank-you/');
    exit;
}

function clean_text(string $value): string
{
    $value = strip_tags($value);
    $value = preg_replace('/[\r\n]+/', ' ', $value) ?? '';
    return trim($value);
}

function field_value(string $key): string
{
    if (!isset($_POST[$key])) {
        return '';
    }

    if (is_array($_POST[$key])) {
        return clean_text(implode(', ', array_map('strval', $_POST[$key])));
    }

    return clean_text((string) $_POST[$key]);
}

function normalized_files(string $key): array
{
    if (!isset($_FILES[$key])) {
        return [];
    }

    $file = $_FILES[$key];
    if (!is_array($file['name'])) {
        return [$file];
    }

    $files = [];
    foreach ($file['name'] as $index => $name) {
        $files[] = [
            'name' => $name,
            'type' => $file['type'][$index] ?? '',
            'tmp_name' => $file['tmp_name'][$index] ?? '',
            'error' => $file['error'][$index] ?? UPLOAD_ERR_NO_FILE,
            'size' => $file['size'][$index] ?? 0,
        ];
    }

    return $files;
}

$firstName = field_value('first_name');
$lastName = field_value('last_name');
$name = field_value('name');
if ($name === '') {
    $name = trim($firstName . ' ' . $lastName);
}

$email = field_value('email');
$replyTo = filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : $from;
$subjectNeed = field_value('roofing_need');
$subject = 'New roofing estimate request';
if ($subjectNeed !== '') {
    $subject .= ': ' . $subjectNeed;
}

$submittedAt = date('c');
$fields = [
    'Form' => field_value('form-name'),
    'Name' => $name,
    'First name' => $firstName,
    'Last name' => $lastName,
    'Phone' => field_value('phone'),
    'Email' => $email,
    'Property address, city, or ZIP' => field_value('service_area'),
    'Roof issue' => $subjectNeed,
    'Guide choice' => field_value('guide_choice'),
    'Urgency' => field_value('urgency'),
    'Best callback time' => field_value('preferred_callback'),
    'Photos available' => field_value('photos_available'),
    'Message' => field_value('message'),
    'UTM source' => field_value('utm_source'),
    'UTM medium' => field_value('utm_medium'),
    'UTM campaign' => field_value('utm_campaign'),
    'Submitted at' => $submittedAt,
    'IP address' => $_SERVER['REMOTE_ADDR'] ?? '',
    'User agent' => $_SERVER['HTTP_USER_AGENT'] ?? '',
];

$body = $brand . " website lead\n\n";
foreach ($fields as $label => $value) {
    if ($value !== '') {
        $body .= $label . ': ' . $value . "\n";
    }
}

$allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/gif',
    'image/heic',
    'image/heif',
];
$maxFileSize = 6 * 1024 * 1024;
$maxTotalSize = 16 * 1024 * 1024;
$totalSize = 0;
$attachments = [];
$uploadNotes = [];
$finfo = function_exists('finfo_open') ? finfo_open(FILEINFO_MIME_TYPE) : false;

foreach (normalized_files('roof_photos') as $file) {
    if (($file['error'] ?? UPLOAD_ERR_NO_FILE) === UPLOAD_ERR_NO_FILE) {
        continue;
    }

    if (($file['error'] ?? UPLOAD_ERR_OK) !== UPLOAD_ERR_OK) {
        $uploadNotes[] = clean_text((string) $file['name']) . ' could not be uploaded.';
        continue;
    }

    $size = (int) ($file['size'] ?? 0);
    if ($size <= 0 || $size > $maxFileSize || ($totalSize + $size) > $maxTotalSize) {
        $uploadNotes[] = clean_text((string) $file['name']) . ' was skipped because it was too large.';
        continue;
    }

    $tmpName = (string) ($file['tmp_name'] ?? '');
    if (!is_uploaded_file($tmpName)) {
        continue;
    }

    $mime = $finfo ? finfo_file($finfo, $tmpName) : ($file['type'] ?? '');
    if (!in_array($mime, $allowedTypes, true)) {
        $uploadNotes[] = clean_text((string) $file['name']) . ' was skipped because it was not a supported image.';
        continue;
    }

    $filename = preg_replace('/[^A-Za-z0-9._-]/', '-', basename((string) $file['name'])) ?: 'roof-photo';
    $attachments[] = [
        'name' => $filename,
        'mime' => $mime,
        'content' => file_get_contents($tmpName),
    ];
    $totalSize += $size;
}

if ($finfo) {
    finfo_close($finfo);
}

if ($uploadNotes !== []) {
    $body .= "\nUpload notes:\n" . implode("\n", $uploadNotes) . "\n";
}

$boundary = 'TrustBuiltBoundary_' . bin2hex(random_bytes(12));
$headers = [
    'From: ' . $brand . ' Website <' . $from . '>',
    'Reply-To: ' . $replyTo,
    'MIME-Version: 1.0',
    'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
];

$message = '--' . $boundary . "\r\n";
$message .= "Content-Type: text/plain; charset=UTF-8\r\n";
$message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$message .= $body . "\r\n";

foreach ($attachments as $attachment) {
    $message .= '--' . $boundary . "\r\n";
    $message .= 'Content-Type: ' . $attachment['mime'] . '; name="' . $attachment['name'] . '"' . "\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n";
    $message .= 'Content-Disposition: attachment; filename="' . $attachment['name'] . '"' . "\r\n\r\n";
    $message .= chunk_split(base64_encode($attachment['content'])) . "\r\n";
}

$message .= '--' . $boundary . "--\r\n";

mail($recipient, $subject, $message, implode("\r\n", $headers));

header('Location: /thank-you/');
exit;
