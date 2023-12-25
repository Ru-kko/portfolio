import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookie = req.cookies.get("last-message")?.value;

  if (cookie && parseInt(cookie) <= Date.now() + 1800000) {
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

  const body = await req.json().catch((e) => {
    console.error(e);
    return e;
  });

  if (!(body.content && body.email && body.title)) {
    return NextResponse.json(
      { error: "BadRequest", message: "Missing data" },
      { status: 400 }
    );
  }

  console.log("Unimplemented");
  return NextResponse.json(
    { error: "NotImplemented" },
    { status: 501 }
  );
}
