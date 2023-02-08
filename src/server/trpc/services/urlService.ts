import * as Prisma from "@prisma/client";
import shortid from 'shortid'

const prisma = new Prisma.PrismaClient();

const $newUrl = async (url: string, createBy?: string | null) => {
  try {

    const prefix = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://urshort.netlify.app'

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
        shorterUrl: `${prefix}/r/${uniqueString}`,
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

const $getRealPath = async (path: string) => {
  try {

    const result = await prisma.shorterUrl.findFirst({
      where: {
        id: path
      },
      include: {
        url: true
      }
    })

    if (!result) return {
      url: null,
      success: false
    }

    await prisma.url.update({
      where: {
        id: result.url.id
      },
      data: {
        clicks: {
          increment: 1
        }
      }
    })

    return {
      url: result?.url.url || null,
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

const $getUrls = async (userId: string) => {
  try {

    const result = await prisma.url.findMany({
      where: {
        createById: userId
      },
      include: {
        shorterUrls: true
      }
    })

    return {
      urls: result,
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
  $newUrl,
  $getRealPath,
  $getUrls,
}
