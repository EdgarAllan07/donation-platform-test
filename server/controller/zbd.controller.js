export const getData = async (req,res)=>{
  const api = await fetch("https://api.zebedee.io/v0/static-charges", {
    method: "post",
    maxBodyLength: Infinity,
    headers: {
      'apikey': "h0YsMAWwAZ1qP588e7YAOQDehWta5KtY",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "maxAmount": "2000000",
      "minAmount": "1000000",
      "description": "Static Charge API Ref",
      "internalId": "11af004b8",
      "callbackUrl": "https://your-site.com/zbd-callback",
      "successMessage": "Congratulations your payment was successful!"
    })
  })

  const data = await api.json()
  res.json(data)
}
