function Dashboard() {

  const token = localStorage.getItem("token");

  if (!token) {
    return <h2>You must login first</h2>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome! You are logged in.</p>
    </div>
  );
}

export default Dashboard;