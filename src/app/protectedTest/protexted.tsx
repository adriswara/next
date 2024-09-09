// pages/protected.tsx

import withAuth from "@/components/withAuth";

const ProtectedPage = () => {
    return <div>This is a protected page</div>;
};

export default withAuth(ProtectedPage);
