const image1 = 'https://firebasestorage.googleapis.com/v0/b/portifoil-bcd7d.appspot.com/o/projects-screens%2Frelirk-waybee-driver.png?alt=media&token=3b7c6b0b-d478-43b3-83ff-a45d81c07749';
const image2 = 'https://firebasestorage.googleapis.com/v0/b/portifoil-bcd7d.appspot.com/o/projects-screens%2Frelirk-colegio-bandeirantes.png?alt=media&token=ec56ae21-e1e2-4e79-b93c-92976b99a0fd'
const image3 = 'https://firebasestorage.googleapis.com/v0/b/portifoil-bcd7d.appspot.com/o/projects-screens%2Frelirk-flexblog.png?alt=media&token=3b3fda08-8adc-4957-8ad5-e99a436a0573'
const image4 = 'https://firebasestorage.googleapis.com/v0/b/portifoil-bcd7d.appspot.com/o/projects-screens%2Frelirk-swinfo.png?alt=media&token=da6597b5-50a7-49a0-b0dd-2278b65d08ec'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index: number) => images[index % images.length]

export default imageByIndex
