# SiteGround Deploy

Use this when publishing the Trust Built Roofing static site to SiteGround.

## Build

```bash
npm install
npm run build
```

Deploy the contents of `dist/`, not the repository root.

## Upload Package

The local deploy ZIP is:

```text
C:\Users\emusi\Documents\eriehome-clone\trustbuilt-siteground-upload.zip
```

Upload and extract the ZIP inside the SiteGround domain document root, usually:

```text
public_html
```

The ZIP contents should place `index.html`, `lead.php`, `.htaccess`, `assets/`, service folders, `robots.txt`, `sitemap.xml`, and `llms.txt` directly inside `public_html`.

Do not upload the ZIP as a nested folder such as `public_html/dist/index.html`.

## Form Check

Forms submit to:

```text
/lead.php
```

The handler emails leads to:

```text
info@trustbuiltroofing.com
```

Before going live, confirm that mailbox or forwarder exists in SiteGround. Then submit one test lead with and without a photo attachment.

## URLs To Check

- `https://trustbuiltroofing.com/`
- `https://trustbuiltroofing.com/roof-repair/`
- `https://trustbuiltroofing.com/roof-replacement/`
- `https://trustbuiltroofing.com/storm-damage-roofing/`
- `https://trustbuiltroofing.com/roof-leak-repair/`
- `https://trustbuiltroofing.com/service-areas/south-louisiana/`
- `https://trustbuiltroofing.com/service-areas/mississippi/`
- `https://trustbuiltroofing.com/robots.txt`
- `https://trustbuiltroofing.com/sitemap.xml`
- `https://trustbuiltroofing.com/llms.txt`
