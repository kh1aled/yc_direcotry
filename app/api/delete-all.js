export default async function handler(req, res) {
    if (req.method !== 'DELETE') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    try {
      // Fetch all document IDs except system images
      const docs = await client.fetch(`*[_type != "sanity.imageAsset"]._id`);
  
      if (docs.length === 0) {
        return res.status(200).json({ message: "No documents found to delete." });
      }
  
      // Delete all documents
      await client.delete(docs);
      return res.status(200).json({ message: `Deleted ${docs.length} documents.` });
    } catch (error) {
      console.error('Error deleting documents:', error);
      return res.status(500).json({ error: 'Failed to delete documents' });
    }
  }
  