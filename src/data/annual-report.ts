export const annualReportSamples = [
  "Ellektro Business report.jpg",
  "Ellektro Monthly sales.jpg",
  "Ellektro top investor.jpg",
  "Sync med 4 year plan projection.jpg",
  "Sync med roadmap.jpg",
  "Syncmed App interface.jpg",
  "Syncmed Cover.jpg",
  "Syncmed Market Analysis.jpg"
].map((file) => ({
  file,
  label: file.replace(/\.jpg$/i, ''),
  src: '/annual-report/' + encodeURIComponent(file),
}))
