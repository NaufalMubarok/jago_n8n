export default function Success() {
  return (
    <div className="min-h-screen px-6 md:px-20 py-20 text-center">
      <h1 className="text-4xl font-bold text-green-600">Pembayaran Berhasil!</h1>
      <p className="mt-4 text-gray-600">Terima kasih sudah membeli workflow.</p>

      <a
        href="/downloads/workflow.zip"
        className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Download Workflow
      </a>
    </div>
  );
}
