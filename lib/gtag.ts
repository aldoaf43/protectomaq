declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, string | number | boolean | undefined>
    ) => void
  }
}

export const sendGAdsEvent = (conversionLabel: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
    console.log('conversionId', conversionLabel)
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
    })

    console.log(`Evento enviado a GAds: ${conversionId}/${conversionLabel}`)
  } else {
    console.warn('Google Tag no inicializado o bloqueado por AdBlock')
  }
}
