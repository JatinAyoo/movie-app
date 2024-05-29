const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '2400f395345d8a212e51a9f0fee9f3fb',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;