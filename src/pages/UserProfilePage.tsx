import { useGetMyUser, useUpdateMyUser } from "../api/MyUserApi.jsx"
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm"

const UserProfilePage = () => {
    const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();
    const { currentUser, isLoading: isGetLoading } = useGetMyUser();

    if(isGetLoading){
        return <span>Loading...</span>
    }

    if(!currentUser){
        return <span>Unable to load user profile</span>
    }

    return (
        <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading} />
    )
}

export default UserProfilePage


/*
FLOW
on clicking submit button
handleSubmit -> onSave -> updateUser -> updateMyUserRequest -> MyUserRoutes(backend) -> 3 middlewares -> MyUserController
*/