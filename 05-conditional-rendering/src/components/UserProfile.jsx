function UserProfile({ isLoading, data }) {
  if (isLoading) {
    return <div>Loading user profile...</div>;
  }

  if (!data) {
    return null;
  }

  return <div>Username: {data.name}</div>;
}

export default UserProfile;
