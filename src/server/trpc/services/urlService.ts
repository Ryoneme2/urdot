import * as Prisma from "@prisma/client";
import shortid from 'shortid'

const prisma = new Prisma.PrismaClient();



const $newUrl = async (url: string, createBy?: string | null) => {
  try {

    const prefix = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.VERCEL

    console.log({ prefix, url, createBy });

    const urlData = await prisma.url.create({
      data: {
        url: url,
        createById: createBy
      }
    })

    const uniqueString = shortid.generate()

    const result = await prisma.shorterUrl.create({
      data: {
        id: uniqueString,
        shorterUrl: `${prefix}/${uniqueString}`,
        urlId: urlData.id
      }
    })

    return {
      url: result,
      success: true
    };

  } catch (e) {
    console.error(e);

    return {
      msg: "Something went wrong",
      success: false
    };
  }
}

export {
  $newUrl
}
