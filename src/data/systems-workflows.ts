export const systemsWorkflowSamples = [
  "Deadline tracking.png",
  "EOD reporting.png",
  "File organization.png",
  "Follow up process.png",
  "Project status.png",
  "Report coordination.png",
  "Research Tracking.png",
  "Taskflow.png"
].map((file) => ({
  file,
  label: file.replace(/\.png$/i, ''),
  src: '/systems-workflows/' + encodeURIComponent(file),
}))
