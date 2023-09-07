export async function POST(req: Request) {
  const formData = await req.formData();

  console.log(formData);
  return Response.json(formData);
}
