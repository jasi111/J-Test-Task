import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '86apkkys', 
    dataset:'production',
    apiVersion:'2021-03-25',
    useCDN:false,
    token:'skzVO3Ny9CPFL2NyZsa7FEhwXFltKzXRYIeijbSXMtAq1qulAuKuVDdUwHVXKDkp0e7Y4NKsbizJtxIdDfQfbRBnVYPoZpW5djfePATcZrFpq17UaN78uisoGPMF0pLdu9PW4P7NOCHqracQFus3ARxaSokAaAJu2NUxSOCT6hFaT37U9q5l'
})