import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext.jsx';
import PostCard from '../components/PostCard.jsx';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const response = await axios.get(`http://localhost:5000/api/users/${id}`, config);
        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id, user]);

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (!profile) {
    return <p>User not found.</p>;
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h2>{profile.name}</h2>
        <p>{profile.bio}</p>
      </div>

      <div className="profile-posts">
        <h3>Posts by {profile.name}</h3>
        {profile.posts && profile.posts.length > 0 ? (
          profile.posts.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <p>No posts yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;