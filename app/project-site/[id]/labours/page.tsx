interface LabourPageProps {
  params: {
    id: string;
  };
}

export default function LabourPage({ params }: LabourPageProps) {
  const projectId = params?.id || 'No ID provided';

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Labour Page</h1>
      <p>Project ID: {projectId}</p>
    </div>
  );
}