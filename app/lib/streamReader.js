export default async function* streamReader(res) {
  const reader = res.body?.getReader();
  const decoder = new TextDecoder();
  if (reader == null) return;

  while (true) {
    const { done, value } = await reader.read();
    const chunk = decoder.decode(value);
    yield chunk;
    if (done) break;
  }
}
