import { getApiService } from "@/services";
import { MessageRequestArgs } from "@/types/Message";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookie = req.cookies.get("last-message")?.value;
  const nextTry = Date.now() + 1800000;

  if (cookie && parseInt(cookie) <= nextTry) {
    return NextResponse.json(
      {
        error: "MessageTimeout",
        message: "You can send messages every 30 minutes",
      },
      {
        status: 400,
      }
    );
  }

  const body: MessageRequestArgs | Error = await req
    .json()
    .then((r) => {
      return {
        title: r.title,
        email: r.email,
        content: r.content,
      };
    })
    .catch((e) => e);

  if (body instanceof Error) {
    console.error(body);
    return NextResponse.json(
      { error: "BadRequest", message: "Missing data" },
      { status: 400 }
    );
  }

  const gres = await getApiService().sendMessage(body).catch((e: Error) => e);

  if (!gres || gres instanceof Error) {
    console.error(gres);
    return NextResponse.json(
      { error: "InternalServerError", message: gres?.message },
      { status: 500 }
    );
  }

  const response = NextResponse.json(
    { status: "Ok", message: "succesfully message created" },
    { status: 200 }
  );

  response.cookies.set("last-message", nextTry.toString());

  return response;
}
