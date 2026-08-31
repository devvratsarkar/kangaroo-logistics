export async function submitConsultation(values) {
  await new Promise((resolve) => setTimeout(resolve, 900))

  // Replace with a real API call when the backend endpoint is available.
  console.info('Helpdesk message submitted:', values)

  return { success: true }
}
