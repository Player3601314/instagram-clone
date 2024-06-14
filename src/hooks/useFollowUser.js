import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "../hooks/useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useFollowUser = (userId) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const { userProfile, setUserProfile } = useUserProfileStore();
  const showToast = useShowToast();

  const handleFollowUser = async () => {
    setIsUpdating(true);
    try {
      const currentUserRef = doc(firestore, "users", authUser.uid);
      const userToFollowOrUnfollowRef = doc(firestore, "users", userId);

      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userId) : arrayUnion(userId)
      });

      await updateDoc(userToFollowOrUnfollowRef, {
        followers: isFollowing ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid)
      });

      if (isFollowing) {
        setAuthUser({
          ...authUser,
          following: authUser.following.filter(id => id !== userId)
        });
        if (userProfile) {
          setUserProfile({
            ...userProfile,
            followers: userProfile.followers.filter(id => id !== authUser.uid)
          });
        }

        localStorage.setItem("user-info", JSON.stringify({
          ...authUser,
          following: authUser.following.filter(id => id !== userId)
        }));
        setIsFollowing(false);
      } else {
        setAuthUser({
          ...authUser,
          following: [...authUser.following, userId]
        });
        if (userProfile) {
          setUserProfile({
            ...userProfile,
            followers: [...userProfile.followers, authUser.uid]
          });
        }

        localStorage.setItem("user-info", JSON.stringify({
          ...authUser,
          following: [...authUser.following, userId]
        }));
        setIsFollowing(true);
      }
    } catch (error) {
      console.log(error);
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    if (authUser) {
      setIsFollowing(authUser.following.includes(userId));
    }
  }, [authUser, userId]);

  return { isUpdating, isFollowing, handleFollowUser };
};

export default useFollowUser;
