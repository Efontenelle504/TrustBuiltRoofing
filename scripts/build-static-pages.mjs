import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const root = process.cwd();
const today = "2026-05-14";
const site = "https://trustbuiltroofing.com";

const pages = [
  {
    path: "roof-repair",
    title: "Roof Repair Estimates | Trust Built Roofing Co.",
    description: "Roof repair estimates for leaks, missing shingles, flashing issues, pipe boot problems, and localized roof damage in South Louisiana and Mississippi.",
    kicker: "Roof repair",
    h1: "Roof repair estimates that start with the problem you can see.",
    summary: "Trust Built Roofing Co. helps homeowners understand leaks, missing shingles, flashing issues, and localized damage before choosing the next step.",
    bullets: ["Active leaks or ceiling stains", "Missing or damaged shingles", "Pipe boot or flashing issues", "Localized storm or wind damage"],
    faq: [
      ["Can a roof leak be repaired without replacing the whole roof?", "Sometimes. The right path depends on the leak source, roof age, surrounding material condition, and whether the issue is isolated or part of a larger roof system problem."],
      ["What should I send before a roof repair estimate?", "Share the property location, photos of the roof if available, interior leak photos, and when the problem started."],
      ["Can Trust Built Roofing Co. review urgent roof problems?", "Trust Built Roofing Co. can review urgent roof problems and help homeowners identify the practical next step. Call to confirm current availability."]
    ]
  },
  {
    path: "roof-replacement",
    title: "Roof Replacement Estimates | Trust Built Roofing Co.",
    description: "Roof replacement estimates for aging roofs, repeated repairs, storm-worn shingles, and long-term residential roof protection.",
    kicker: "Roof replacement",
    h1: "Roof replacement estimates for aging and storm-worn homes.",
    summary: "A roof replacement estimate should explain materials, underlayment, flashing, ventilation, edges, penetrations, and how the work will be handled.",
    bullets: ["Aging roof systems", "Repeated repair calls", "Storm-worn asphalt shingles", "Long-term protection planning"],
    faq: [
      ["When should a homeowner consider roof replacement?", "Replacement becomes worth discussing when repairs are frequent, the roof is aging, materials are worn across large areas, or leaks point to broader system issues."],
      ["What should a roof replacement estimate include?", "A clear estimate should explain scope, materials, underlayment, flashing, ventilation, cleanup expectations, and how roof penetrations are handled."],
      ["Can Trust Built Roofing Co. help compare repair and replacement?", "Yes. Trust Built Roofing Co. helps homeowners understand whether the concern appears localized or whether replacement planning should be discussed."]
    ]
  },
  {
    path: "storm-damage-roofing",
    title: "Storm Damage Roof Checks | Trust Built Roofing Co.",
    description: "Storm damage roof checks for wind, hail, heavy rain, missing shingles, roof leaks, and post-storm roof damage.",
    kicker: "Storm damage roofing",
    h1: "Storm damage roof checks before small problems become interior damage.",
    summary: "After wind, hail, or heavy rain, Trust Built Roofing Co. helps homeowners document visible damage, understand urgency, and choose the next roofing step without making insurance promises.",
    bullets: ["Missing, lifted, or creased shingles", "Ceiling stains after heavy rain", "Granule loss, exposed fasteners, or flashing issues", "Photos and notes that make the follow-up call clearer"],
    faq: [
      ["What are signs of storm damage on a roof?", "Common warning signs include missing shingles, lifted shingles, exposed fasteners, damaged flashing, granule loss, ceiling stains, and new leaks after a storm."],
      ["Should I wait if I only see a small storm-related issue?", "Small visible issues can lead to larger water intrusion if ignored. A focused roof check helps determine urgency and next steps."],
      ["Does a roof check replace an insurance decision?", "No. A roof check can document visible conditions and practical next steps, but insurance coverage decisions belong to the insurer."]
    ]
  },
  {
    path: "roof-leak-repair",
    title: "Roof Leak Repair Estimates | Trust Built Roofing Co.",
    description: "Roof leak repair estimates for active leaks, ceiling stains, water intrusion, flashing problems, and pipe boot issues.",
    kicker: "Roof leak repair",
    h1: "Roof leak repair estimates for active leaks and ceiling stains.",
    summary: "Roof leaks need a careful check because the visible stain is not always directly below the roof entry point.",
    bullets: ["Active roof leaks", "Ceiling stains", "Pipe boot leaks", "Flashing or roof penetration issues"],
    faq: [
      ["Why is the ceiling stain not always under the leak source?", "Water can travel along decking, framing, or insulation before showing inside the home, so a leak needs roof-side review."],
      ["What details help with a roof leak estimate?", "Helpful details include when the leak appears, recent weather, photos of interior damage, attic observations, and any visible roof damage."],
      ["Can a roof leak mean the whole roof needs replacement?", "Not always. Some leaks are localized, while others reveal wider material or installation problems. The roof condition determines the right recommendation."]
    ]
  },
  {
    path: "service-areas/south-louisiana",
    title: "South Louisiana Roofing Estimates | Trust Built Roofing Co.",
    description: "Residential roof repair, replacement, storm damage, and leak estimates for homeowners in South Louisiana.",
    kicker: "Service area",
    h1: "Roof repair and replacement estimates in South Louisiana.",
    summary: "Trust Built Roofing Co. helps South Louisiana homeowners with roof damage tied to heavy rain, wind, humidity, storms, leaks, and aging shingles.",
    bullets: ["Roof repair estimates", "Roof replacement planning", "Storm damage roof checks", "Roof leak help"],
    faq: [
      ["Does Trust Built Roofing Co. serve all of South Louisiana?", "Service availability can depend on the specific address. Call or submit the form with your ZIP code to confirm."],
      ["What roof issues are common in South Louisiana?", "Heavy rain, wind, humidity, storm exposure, and aging asphalt shingles can all create roof repair or replacement needs."],
      ["How do I confirm service for my address?", "Call (504) 285-7707 or submit the estimate form with your city or ZIP code."]
    ]
  },
  {
    path: "service-areas/mississippi",
    title: "Mississippi Roofing Estimates | Trust Built Roofing Co.",
    description: "Residential roof repair, replacement, storm damage, and roof leak estimates for homeowners in Mississippi.",
    kicker: "Service area",
    h1: "Roof repair, replacement, and storm damage estimates in Mississippi.",
    summary: "Trust Built Roofing Co. helps Mississippi homeowners understand roof repair, replacement, storm damage, and leak issues before choosing the next step.",
    bullets: ["Residential roof repair", "Replacement estimate planning", "Storm and leak checks", "Service confirmation by address"],
    faq: [
      ["Does Trust Built Roofing Co. serve my Mississippi address?", "Call or submit the estimate form with your city or ZIP code to confirm service availability for your specific address."],
      ["What roofing services are available in Mississippi?", "Trust Built Roofing Co. provides estimates for roof repair, replacement, storm damage checks, and roof leak issues."],
      ["What should I include in a Mississippi roofing estimate request?", "Include your roof issue, city or ZIP code, contact information, and any roof or leak photos you have."]
    ]
  }
];

const utilityPages = [
  {
    path: "privacy",
    title: "Privacy Policy | Trust Built Roofing Co.",
    description: "Privacy policy for Trust Built Roofing Co. estimate requests and website contact forms.",
    kicker: "Privacy",
    h1: "Privacy policy.",
    summary: "Trust Built Roofing Co. uses information submitted through the website to respond to roofing estimate requests and service questions.",
    body: [
      "Information you submit may include your name, phone number, email address, location, roofing need, and message details.",
      "That information is used to respond to your request, confirm service availability, and communicate about your roofing estimate.",
      "Do not submit sensitive personal, financial, or insurance information through the website form."
    ]
  },
  {
    path: "thank-you",
    title: "Estimate Request Received | Trust Built Roofing Co.",
    description: "Next steps after submitting a Trust Built Roofing Co. roofing estimate request.",
    kicker: "Request received",
    h1: "Your roofing estimate request has been received.",
    summary: "Trust Built Roofing Co. has the request. Here is what to gather before the follow-up call so the roofing conversation is more useful.",
    body: [
      "If water is actively entering the home, call (504) 285-7707 instead of waiting for a routine follow-up.",
      "Before the call, gather the property address, the timing of the issue, roof or interior photos, and the best callback window.",
      "If storm damage is involved, note the approximate storm date and any visible missing, lifted, or damaged shingles."
    ],
    cards: [
      ["Active leak?", "Call now if water is entering the home or ceiling damage is spreading."],
      ["Helpful photos", "Roof photos, ceiling stains, attic moisture, or damaged shingles can make the call clearer."],
      ["What happens next", "Trust Built confirms the issue, service area, urgency, and the right estimate type."]
    ]
  }
];

const allPages = [...pages, ...utilityPages];

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);
}

function formName(page) {
  return `${page.path.replace(/[^a-z0-9]+/g, "-")}-estimate`;
}

function serviceValueCards(page) {
  const cards = [
    ["Start with what you can see", "Leaks, lifted shingles, missing tabs, soft spots, ceiling stains, and storm timing all help point the estimate in the right direction."],
    ["Separate urgent from planned", "Some roof problems need fast attention. Others need a clearer repair-or-replacement discussion before a larger project makes sense."],
    ["Make the appointment useful", "The best request includes the issue, property location, timing, photos if available, and the best time to call."]
  ];

  return cards.map(([title, body]) => `<article class="card value-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("");
}

function estimateBrief(page) {
  const checklist = [
    ["Issue", page.bullets[0] || "Visible roof issue"],
    ["Timing", page.path.includes("storm") ? "Recent wind, hail, or heavy rain" : "When the issue first showed up"],
    ["Photos", "Roof, ceiling, attic, or exterior symptoms if available"],
    ["Next step", page.path.includes("replacement") ? "Repair history and replacement priorities" : "Repair, replacement, or urgent follow-up"]
  ];

  return `<section class="brief-band">
      <div class="wrap brief-panel">
        <div>
          <p class="kicker">Before the appointment</p>
          <h2>Know what to share before you request a roof estimate.</h2>
          <p>A few clear details can make the estimate more useful: what changed, when it started, where the home is located, and whether photos are available.</p>
        </div>
        <div class="brief-grid">
          ${checklist.map(([label, body]) => `<div><b>${escapeHtml(label)}</b><span>${escapeHtml(body)}</span></div>`).join("")}
        </div>
      </div>
    </section>`;
}

function processSteps(page) {
  const steps = [
    ["Tell us what changed", `Share the visible roof issue, leak behavior, storm timing, or service-area question related to ${page.kicker.toLowerCase()}.`],
    ["Confirm the right estimate", "A follow-up call can confirm service availability, urgency, useful photos, and whether the request points toward repair or replacement."],
    ["Schedule the appointment", "Once the issue is clear, the next step is setting the roof appointment and preparing for the estimate."]
  ];

  return steps.map(([title, body], index) => `<article class="step"><span>${index + 1}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("");
}

function heroImage(page) {
  if (page.path.includes("replacement")) {
    return "trust-built-roof-jobsite.webp";
  }

  if (page.path.includes("storm")) {
    return "trust-built-storm-damage-detail.webp";
  }

  if (page.path.includes("leak") || page.path.includes("repair")) {
    return "trust-built-pipe-boot-detail.webp";
  }

  return "trust-built-completed-roof.webp";
}

function proofPhotos(prefix) {
  const photos = [
    ["trust-built-completed-roof.webp", "Completed roof", "A finished roof photo helps homeowners see the type of result a clear estimate is working toward."],
    ["trust-built-roof-jobsite.webp", "Jobsite organization", "A clean, organized jobsite matters because roofing work affects the whole property while the project is underway."],
    ["trust-built-pipe-boot-detail.webp", "Repair detail", "Small roof details like pipe boots, flashing, and exposed fasteners can be the source of larger leak problems."],
    ["trust-built-storm-damage-detail.webp", "Storm damage detail", "Visible shingle damage, lifted edges, and missing tabs help show why a focused roof check is worth scheduling."]
  ];

  return photos.map(([src, title, body]) => `<figure class="photo-card">
      <img src="${prefix}assets/${src}" alt="${escapeHtml(`${title} roofing documentation photo`)}" loading="lazy" />
      <figcaption><b>${escapeHtml(title)}</b>${escapeHtml(body)}</figcaption>
    </figure>`).join("");
}

function relatedCards(page, prefix) {
  const related = [
    ["roof-repair", "Roof repair", "Leaks, missing shingles, and localized roof damage."],
    ["roof-replacement", "Roof replacement", "Aging roof systems and long-term protection planning."],
    ["storm-damage-roofing", "Storm damage", "Wind, hail, rain, and post-storm roof issues."],
    ["roof-leak-repair", "Leak help", "Ceiling stains, active leaks, and water intrusion."]
  ].filter(([path]) => path !== page.path);

  return related.slice(0, 3).map(([path, title, body]) => `<a class="card" href="${prefix}${path}/"><b>${escapeHtml(title)}</b><br />${escapeHtml(body)}</a>`).join("");
}

function appointmentForm(page) {
  const name = formName(page);
  return `<form class="form-card" name="${name}" action="/thank-you/" method="post" data-netlify="true" netlify-honeypot="bot-field" enctype="multipart/form-data">
      <input type="hidden" name="form-name" value="${name}" />
      <input type="hidden" name="utm_source" value="" />
      <input type="hidden" name="utm_medium" value="" />
      <input type="hidden" name="utm_campaign" value="" />
      <p class="hidden-field"><label>Do not fill this out if you are human <input name="bot-field" /></label></p>
      <label>Full name<input name="name" autocomplete="name" required /></label>
      <div class="form-row">
        <label>Phone<input name="phone" autocomplete="tel" required /></label>
        <label>Email<input name="email" type="email" autocomplete="email" /></label>
      </div>
      <label>Property address, city, or ZIP code<input name="service_area" autocomplete="street-address" required /></label>
      <label>Roof issue<select name="roofing_need" required>
        <option value="">Select one</option>
        <option>Roof leak or ceiling stain</option>
        <option>Missing, lifted, or damaged shingles</option>
        <option>Storm damage</option>
        <option>Roof replacement planning</option>
        <option>Confirm service availability</option>
      </select></label>
      <div class="form-row">
        <label>How urgent is it?<select name="urgency" required>
          <option value="">Select one</option>
          <option>Active leak now</option>
          <option>Storm happened recently</option>
          <option>Visible damage, but no leak</option>
          <option>Planning ahead</option>
        </select></label>
        <label>Best callback time<input name="preferred_callback" placeholder="Morning, afternoon, evening" /></label>
      </div>
      <label>Do you have roof or ceiling photos?<select name="photos_available">
        <option>Not yet</option>
        <option>Yes, roof photos are available</option>
        <option>Yes, interior leak photos are available</option>
        <option>Yes, both roof and interior photos are available</option>
      </select></label>
      <label>Attach roof or leak photos<input name="roof_photos" type="file" accept="image/*" multiple /></label>
      <label>What should we know?<textarea name="message" rows="4" placeholder="Tell us what happened, when you noticed it, and whether photos are available."></textarea></label>
      <button class="btn" type="submit">Request a roofing estimate</button>
      <p class="fine-print">For urgent roof issues, call <a href="tel:5042857707">(504) 285-7707</a>. By submitting, you agree to be contacted about your roof.</p>
    </form>`;
}

function pageHtml(page) {
  const isUtility = !page.faq;
  const prefix = "../".repeat(page.path.split("/").length);
  const headerCta = isUtility ? `${prefix}#contact` : "#appointment";
  const heroBackground = isUtility ? "trust-built-completed-roof.webp" : heroImage(page);
  const faqSchema = page.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": page.faq.map(([question, answer]) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": { "@type": "Answer", "text": answer }
    }))
  } : null;
  const schemaGraph = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${site}/${page.path}/#webpage`,
      "url": `${site}/${page.path}/`,
      "name": page.title,
      "description": page.description,
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${site}/#website`,
        "name": "Trust Built Roofing Co.",
        "url": `${site}/`
      },
      "about": {
        "@type": "RoofingContractor",
        "@id": `${site}/#business`,
        "name": "Trust Built Roofing Co.",
        "url": `${site}/`,
        "telephone": "+15042857707",
        "areaServed": ["South Louisiana", "Mississippi"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${site}/` },
        { "@type": "ListItem", "position": 2, "name": page.kicker, "item": `${site}/${page.path}/` }
      ]
    },
    ...(faqSchema ? [faqSchema] : [])
  ];

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(page.title)}</title>
  <meta name="description" content="${escapeHtml(page.description)}" />
  <meta name="robots" content="${page.path === "thank-you" ? "noindex, follow" : "index, follow, max-snippet:-1, max-image-preview:large"}" />
  <link rel="canonical" href="${site}/${page.path}/" />
  <meta property="og:title" content="${escapeHtml(page.title)}" />
  <meta property="og:description" content="${escapeHtml(page.description)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${site}/${page.path}/" />
  <meta property="og:image" content="${site}/assets/${heroBackground}" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <style>
    :root { --navy:#1b2d4b; --dark:#0b1729; --bronze:#b08a4e; --paper:#f7f4ed; --line:#dfe3ea; --muted:#626b7a; --ink:#172033; --white:#fff; }
    * { box-sizing: border-box; }
    html, body { max-width:100%; overflow-x:hidden; }
    body { margin:0; font-family: Montserrat, Arial, sans-serif; color:var(--ink); background:#fff; line-height:1.6; }
    img { max-width:100%; }
    a { color: inherit; text-decoration: none; }
    .top { background:var(--dark); color:#fff; font-weight:800; font-size:.88rem; }
    .wrap { width:min(1120px, calc(100% - 32px)); margin:0 auto; }
    .wrap > * { min-width:0; }
    .top .wrap, .nav { min-height:42px; display:flex; justify-content:space-between; align-items:center; gap:18px; }
    .top b, .kicker { color:var(--bronze); letter-spacing:.12em; text-transform:uppercase; font-size:.78rem; font-weight:900; }
    header { background:#fff; border-bottom:1px solid rgba(27,45,75,.12); }
    .nav { min-height:74px; }
    .brand { display:flex; align-items:center; gap:12px; font-weight:900; color:var(--navy); text-transform:uppercase; letter-spacing:0; font-size:1.55rem; }
    .mark { width:48px; height:32px; display:grid; grid-template-columns:1fr 1fr; gap:6px; transform:skewX(-16deg); }
    .mark span:first-child { background:var(--navy); } .mark span:last-child { background:var(--bronze); }
    .navlinks { display:flex; gap:20px; font-weight:800; color:#3b3b3b; font-size:.92rem; }
    .btn { display:inline-flex; align-items:center; justify-content:center; min-height:46px; max-width:100%; padding:0 18px; background:var(--bronze); color:var(--dark); border:0; border-radius:6px; font-weight:900; text-align:center; white-space:normal; cursor:pointer; }
    .btn.dark { background:var(--navy); color:#fff; }
    .hero { padding:76px 0 96px; background:linear-gradient(90deg, rgba(11,23,41,.94), rgba(27,45,75,.78)), url('${prefix}assets/${heroBackground}') center/cover; color:#fff; }
    .hero-grid { display:grid; grid-template-columns:minmax(0, 1fr) 360px; gap:36px; align-items:center; }
    h1, h2, h3 { margin:0; line-height:1.08; letter-spacing:0; }
    h1 { max-width:780px; font-family:"Bebas Neue", Impact, sans-serif; font-size:4.2rem; font-weight:400; line-height:.95; text-transform:uppercase; }
    h2 { color:var(--dark); font-family:"Bebas Neue", Impact, sans-serif; font-size:2.85rem; font-weight:400; line-height:.98; text-transform:uppercase; }
    h3 { color:var(--navy); font-size:1.05rem; }
    .hero p { max-width:680px; font-size:1.08rem; color:rgba(255,255,255,.82); }
    .hero-actions { display:flex; gap:12px; flex-wrap:wrap; margin-top:24px; }
    .trust-strip { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:10px; margin-top:30px; }
    .trust-strip div { position:relative; overflow:hidden; background:rgba(11,23,41,.72); border:1px solid rgba(255,255,255,.16); border-left:4px solid var(--bronze); border-radius:6px; padding:17px 16px; font-size:.88rem; font-weight:900; box-shadow:0 16px 34px rgba(0,0,0,.2); }
    .trust-strip div::after { content:""; position:absolute; right:-18px; bottom:-24px; width:72px; height:72px; border:1px solid rgba(176,138,78,.42); border-radius:50%; }
    .trust-strip b { color:var(--bronze); display:block; margin-bottom:5px; font-size:.72rem; letter-spacing:.12em; text-transform:uppercase; }
    .brief-band { position:relative; z-index:2; padding:0; margin-top:-46px; }
    .brief-panel { display:grid; grid-template-columns:minmax(0,.86fr) minmax(0,1.14fr); gap:22px; align-items:stretch; padding:26px; background:linear-gradient(135deg,#fff 0%,#f7f4ed 100%); border:1px solid rgba(27,45,75,.12); border-top:5px solid var(--bronze); border-radius:8px; box-shadow:0 24px 58px rgba(11,23,41,.18); }
    .brief-panel h2 { font-size:2.35rem; }
    .brief-panel p:not(.kicker) { margin:12px 0 0; color:var(--muted); }
    .brief-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
    .brief-grid div { position:relative; overflow:hidden; min-height:118px; padding:18px 18px 16px; background:var(--dark); color:#fff; border-radius:6px; }
    .brief-grid div::before { content:""; display:block; width:42px; height:6px; margin-bottom:16px; background:linear-gradient(90deg,var(--white) 0 58%,var(--bronze) 58% 100%); transform:skewX(-18deg); }
    .brief-grid div::after { content:""; position:absolute; right:-22px; bottom:-26px; width:78px; height:78px; border:1px solid rgba(176,138,78,.34); border-radius:50%; }
    .brief-grid b { display:block; color:var(--bronze); margin-bottom:5px; text-transform:uppercase; letter-spacing:.1em; font-size:.72rem; }
    .brief-grid span { position:relative; z-index:1; display:block; font-weight:800; line-height:1.35; }
    section { padding:70px 0; }
    .band { background:var(--paper); }
    .grid { display:grid; grid-template-columns: minmax(0,.95fr) minmax(0,1.05fr); gap:34px; align-items:start; }
    .panel, details { background:#fff; border:1px solid var(--line); border-radius:6px; padding:24px; box-shadow:0 16px 34px rgba(11,23,41,.06); }
    .panel h2 { color:var(--dark); font-size:2.6rem; }
    ul { padding-left:20px; }
    li { margin:10px 0; }
    .cards { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px; margin-top:24px; }
    .card { position:relative; overflow:hidden; background:#fff; border:1px solid var(--line); border-radius:6px; padding:22px; box-shadow:0 14px 32px rgba(11,23,41,.08); }
    .card::before { content:""; display:block; width:42px; height:6px; margin-bottom:16px; background:linear-gradient(90deg,var(--navy) 0 58%,var(--bronze) 58% 100%); transform:skewX(-18deg); }
    .card::after { content:""; position:absolute; right:-22px; bottom:-28px; width:78px; height:78px; border:1px solid rgba(176,138,78,.18); border-radius:50%; }
    .value-card p, .step p, .panel p { color:var(--muted); }
    .steps { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px; margin-top:24px; }
    .step { background:#fff; border:1px solid var(--line); border-top:4px solid var(--bronze); border-radius:6px; padding:22px; box-shadow:0 14px 32px rgba(11,23,41,.08); }
    .step span { display:inline-flex; align-items:center; justify-content:center; width:34px; height:34px; margin-bottom:16px; border-radius:50%; background:var(--navy); color:#fff; font-weight:900; }
    .photo-grid { display:grid; grid-template-columns:1.15fr .85fr; gap:18px; margin-top:28px; }
    .photo-card { margin:0; min-height:280px; border-radius:6px; overflow:hidden; background:#fff; border:1px solid var(--line); box-shadow:0 18px 38px rgba(11,23,41,.11); }
    .photo-card:first-child { grid-row:span 2; }
    .photo-card img { width:100%; height:100%; min-height:220px; display:block; object-fit:cover; }
    .photo-card figcaption { padding:16px 18px; color:var(--muted); font-size:.9rem; }
    .photo-card b { display:block; margin-bottom:4px; color:var(--navy); font-size:.95rem; }
    .brand-stamp { display:inline-flex; align-items:center; gap:12px; margin-top:22px; padding:12px 16px; background:var(--dark); color:#fff; border-radius:6px; font-weight:900; text-transform:uppercase; letter-spacing:.02em; }
    .brand-stamp small { display:block; color:var(--bronze); font-size:.68rem; letter-spacing:.26em; }
    .mini-mark { width:38px; height:24px; display:grid; grid-template-columns:1fr 1fr; gap:5px; transform:skewX(-16deg); }
    .mini-mark span:first-child { background:var(--white); }
    .mini-mark span:last-child { background:var(--bronze); }
    .cta { background:var(--dark); color:#fff; }
    .cta h2 { color:#fff; }
    .cta p { color:rgba(255,255,255,.76); }
    .faq { display:grid; gap:12px; }
    summary { cursor:pointer; font-weight:900; color:var(--navy); }
    details p { margin:12px 0 0; color:var(--muted); }
    .form-card { min-width:0; background:#fff; color:var(--ink); border:1px solid rgba(255,255,255,.16); border-radius:6px; padding:24px; box-shadow:0 18px 45px rgba(0,0,0,.22); }
    label { display:grid; gap:7px; margin-bottom:13px; font-size:.78rem; font-weight:900; color:var(--navy); text-transform:uppercase; letter-spacing:.05em; }
    input, select, textarea { width:100%; min-width:0; min-height:44px; border:1px solid var(--line); border-radius:5px; padding:11px 12px; font:inherit; color:var(--ink); background:#fff; }
    textarea { resize:vertical; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
    .hidden-field { display:none; }
    .fine-print { font-size:.78rem; color:var(--muted); margin:12px 0 0; }
    footer { background:linear-gradient(135deg, rgba(11,23,41,.98), rgba(27,45,75,.96)); color:rgba(255,255,255,.76); }
    .footer-cta { padding:32px 0; border-bottom:1px solid rgba(255,255,255,.12); display:flex; align-items:center; justify-content:space-between; gap:22px; }
    .footer-cta h2 { color:#fff; max-width:720px; font-size:2.45rem; }
    .footer-cta p { max-width:700px; margin:10px 0 0; color:rgba(255,255,255,.72); }
    .footer-main { padding:40px 0 32px; }
    .footer-grid { display:grid; grid-template-columns:minmax(0,1.18fr) repeat(3,minmax(0,.8fr)); gap:28px; align-items:start; }
    .footer-brand { display:grid; gap:16px; }
    .footer-brand-lockup { display:flex; gap:14px; align-items:center; }
    .footer-mark { width:52px; height:36px; display:grid; flex:0 0 auto; grid-template-columns:1fr 1fr; gap:7px; transform:skewX(-16deg); }
    .footer-mark span:first-child { background:#fff; }
    .footer-mark span:last-child { background:var(--bronze); }
    .footer-brand strong { display:block; color:#fff; font-size:1.25rem; line-height:1; text-transform:uppercase; letter-spacing:0; }
    .footer-brand p { max-width:400px; margin:6px 0 0; }
    .footer-column h3 { margin:0 0 14px; color:#d7b56c; font-size:.76rem; font-weight:900; letter-spacing:.14em; text-transform:uppercase; }
    .footer-links, .footer-contact { display:grid; gap:10px; font-weight:800; }
    .footer-links a, .footer-contact a { color:rgba(255,255,255,.86); }
    .footer-contact b { display:block; color:#fff; font-size:1.02rem; }
    .footer-contact span { display:block; }
    .footer-bottom { padding:18px 0 24px; border-top:1px solid rgba(255,255,255,.12); display:flex; justify-content:space-between; gap:18px; flex-wrap:wrap; color:rgba(255,255,255,.62); font-size:.86rem; }
    .footer-bottom nav { display:flex; gap:16px; flex-wrap:wrap; font-weight:800; }
    @media (max-width:900px) { .hero-grid, .grid, .cards, .steps, .photo-grid, .brief-panel, .footer-grid, .footer-cta { grid-template-columns:1fr; } .footer-cta { display:grid; align-items:start; } .footer-bottom { display:grid; grid-template-columns:1fr; } .hero-grid .form-card { order:2; } .photo-card:first-child { grid-row:auto; } }
    @media (max-width:760px) { .navlinks, .nav > .btn { display:none; } .nav { min-height:68px; justify-content:center; } .top .wrap { justify-content:center; } .top span { display:none; } .brand { font-size:1.2rem; min-width:0; } .hero { padding:48px 0 74px; } h1 { max-width:330px; font-size:2.35rem; overflow-wrap:break-word; } h2 { font-size:2rem; overflow-wrap:break-word; } .hero p { max-width:330px; font-size:.96rem; overflow-wrap:break-word; } .hero-actions { display:grid; grid-template-columns:minmax(0,1fr); max-width:330px; } .hero-actions .btn { width:100%; min-width:0; min-height:54px; padding:8px 12px; } .trust-strip, .form-row, .brief-grid { grid-template-columns:1fr; } .brief-band { margin-top:-36px; } .brief-panel { padding:18px; } .brief-grid div { min-height:96px; } section { padding:54px 0; } .form-card { padding:18px; } }
  </style>
  <script type="application/ld+json">${JSON.stringify(schemaGraph)}</script>
</head>
<body>
  <div class="top"><div class="wrap"><span><b>South Louisiana & Mississippi</b> roof repair, replacement, storm damage, and leak help</span><a href="tel:5042857707">(504) 285-7707</a></div></div>
  <header><div class="wrap nav"><a class="brand" href="${prefix}"><span class="mark"><span></span><span></span></span>Trust Built</a><nav class="navlinks"><a href="${prefix}roof-repair/">Roof repair</a><a href="${prefix}roof-replacement/">Replacement</a><a href="${prefix}storm-damage-roofing/">Storm damage</a><a href="${prefix}roof-leak-repair/">Leaks</a></nav><a class="btn dark" href="${headerCta}">Request estimate</a></div></header>
  <main>
    <section class="hero"><div class="wrap hero-grid"><div><p class="kicker">${escapeHtml(page.kicker)}</p><h1>${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.summary)}</p>${isUtility ? "" : `<div class="hero-actions"><a class="btn" href="#appointment">Request a roofing estimate</a><a class="btn dark" href="tel:5042857707">Call (504) 285-7707</a></div><div class="trust-strip"><div><b>Step 1</b>Describe the issue</div><div><b>Step 2</b>Confirm the estimate type</div><div><b>Step 3</b>Schedule the appointment</div></div>`}</div>${isUtility ? "" : appointmentForm(page)}</div></section>
    ${isUtility ? "" : estimateBrief(page)}
    <section class="band"><div class="wrap grid"><div class="panel"><p class="kicker">What to expect</p><h2>${escapeHtml(page.h1)}</h2><p>${escapeHtml(page.summary)}</p>${isUtility ? page.body.map((item) => `<p>${escapeHtml(item)}</p>`).join("") : `<ul>${page.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul><a class="btn dark" href="#appointment">Talk through my roof issue</a>`}</div><div><p class="kicker">${page.path === "thank-you" ? "Before the call" : "Before you decide"}</p><h2>${page.path === "thank-you" ? "Make the follow-up call faster and more useful." : "Get clear on urgency, roof condition, and the next appointment."}</h2><div class="cards">${isUtility ? (page.cards || []).map(([title, body]) => `<article class="card value-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("") : serviceValueCards(page)}</div></div></div></section>
    ${page.faq ? `<section><div class="wrap"><p class="kicker">Roof details</p><h2>Details that can change the repair, replacement, or storm damage estimate.</h2><div class="brand-stamp"><span class="mini-mark"><span></span><span></span></span><span>Trust Built<small>Roofing Co.</small></span></div><div class="photo-grid">${proofPhotos(prefix)}</div></div></section><section><div class="wrap"><p class="kicker">Appointment process</p><h2>What happens after you reach out.</h2><div class="steps">${processSteps(page)}</div></div></section><section><div class="wrap grid"><div><p class="kicker">Related pages</p><h2>Find the roofing service that fits your situation.</h2><p>These pages answer the most common roofing questions before an appointment is scheduled.</p></div><div class="cards">${relatedCards(page, prefix)}</div></div></section><section class="band"><div class="wrap"><p class="kicker">FAQ</p><h2>Questions about ${escapeHtml(page.kicker.toLowerCase())}.</h2><div class="faq">${page.faq.map(([question, answer], index) => `<details ${index === 0 ? "open" : ""}><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join("")}</div></div></section><section id="appointment" class="cta"><div class="wrap grid"><div><p class="kicker">Request an estimate</p><h2>Send the roof details and get the next step moving.</h2><p>Send the details now or call if the issue is urgent. A clear request makes the follow-up call more useful.</p><a class="btn" href="tel:5042857707">Call (504) 285-7707</a></div>${appointmentForm(page)}</div></section>` : ""}
  </main>
  <footer>
    <div class="wrap footer-cta">
      <div><p class="kicker">Ready for a roof answer?</p><h2>Send the roof details and get the next step moving.</h2><p>Tell us what you are seeing, where the home is located, and whether the issue is urgent.</p></div>
      <a class="btn" href="${headerCta}">Request an estimate</a>
    </div>
    <div class="wrap footer-main">
      <div class="footer-grid">
        <div class="footer-brand"><div class="footer-brand-lockup"><span class="footer-mark" aria-hidden="true"><span></span><span></span></span><div><strong>Trust Built<br />Roofing Co.</strong><p>Built on trust. Backed by experience.</p></div></div><p>Residential roof repair, roof replacement, storm damage, and leak help for homeowners in South Louisiana and Mississippi.</p></div>
        <div class="footer-column"><h3>Services</h3><nav class="footer-links" aria-label="Footer service navigation"><a href="${prefix}roof-repair/">Roof repair</a><a href="${prefix}roof-replacement/">Roof replacement</a><a href="${prefix}storm-damage-roofing/">Storm damage roofing</a><a href="${prefix}roof-leak-repair/">Roof leak repair</a></nav></div>
        <div class="footer-column"><h3>Service areas</h3><nav class="footer-links" aria-label="Footer service area navigation"><a href="${prefix}service-areas/south-louisiana/">South Louisiana</a><a href="${prefix}service-areas/mississippi/">Mississippi</a><a href="${prefix}#service-area">Confirm your address</a><a href="${prefix}#faq">Roofing FAQ</a></nav></div>
        <div class="footer-column"><h3>Contact</h3><div class="footer-contact"><a href="tel:5042857707"><b>(504) 285-7707</b>Call for urgent roof issues</a><a href="mailto:info@trustbuiltroofing.com">info@trustbuiltroofing.com</a><span>Roofing estimates by request.</span></div></div>
      </div>
    </div>
    <div class="wrap footer-bottom"><span>&copy; 2026 Trust Built Roofing Co. All rights reserved.</span><nav aria-label="Footer utility links"><a href="${prefix}privacy/">Privacy</a><a href="${prefix}sitemap.xml">Sitemap</a><a href="${prefix}llms.txt">LLMs.txt</a></nav></div>
  </footer>
</body>
</html>`;
}

async function writePage(base, page) {
  const file = join(base, page.path, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, pageHtml(page), "utf8");
}

function sitemapXml() {
  const sitemapPages = allPages.filter((page) => page.path !== "thank-you");
  const urls = ["", ...sitemapPages.map((page) => page.path)].map((path) => `  <url>
    <loc>${site}/${path ? `${path}/` : ""}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${path ? "monthly" : "weekly"}</changefreq>
    <priority>${path ? "0.8" : "1.0"}</priority>
  </url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function llmsTxt() {
  return `# Trust Built Roofing Co.

Website: ${site}/

Trust Built Roofing Co. provides residential roofing estimates for homeowners in South Louisiana and Mississippi.

Primary services:
- Roof repair: ${site}/roof-repair/
- Roof replacement estimates: ${site}/roof-replacement/
- Storm damage roof checks: ${site}/storm-damage-roofing/
- Roof leak repair estimates: ${site}/roof-leak-repair/

Service area:
- South Louisiana: ${site}/service-areas/south-louisiana/
- Mississippi: ${site}/service-areas/mississippi/

Contact:
- Phone: (504) 285-7707
- Email: info@trustbuiltroofing.com

Important URLs:
- Homepage: ${site}/
- Privacy: ${site}/privacy/
- Sitemap: ${site}/sitemap.xml
- Robots: ${site}/robots.txt

Summary for AI assistants:
Trust Built Roofing Co. helps homeowners understand roof repair, roof replacement, storm damage, and leak issues. Homeowners can request a roofing estimate by phone or by sending the estimate form with their roof issue, location, and contact information.
`;
}

for (const base of [root, join(root, "dist")]) {
  for (const page of allPages) {
    await writePage(base, page);
  }
}

for (const base of [join(root, "public"), join(root, "dist")]) {
  await mkdir(base, { recursive: true });
  await writeFile(join(base, "sitemap.xml"), sitemapXml(), "utf8");
  await writeFile(join(base, "llms.txt"), llmsTxt(), "utf8");
}

console.log(`Generated ${allPages.length} static pages, sitemap.xml, and llms.txt`);
