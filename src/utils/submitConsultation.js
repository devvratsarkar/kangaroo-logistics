export async function submitConsultation(values) {
  await new Promise((resolve) => setTimeout(resolve, 900))

  // Replace with a real API call when the backend endpoint is available.
  console.info('Consultation form submitted:', values)

  return { success: true }
}
