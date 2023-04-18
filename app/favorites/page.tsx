import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "../components/favorites/FavoritesClient";

const FavoritesPage = async () => {
    const favoriteListings = await getFavoriteListings();

    if (favoriteListings.length === 0) {
        return (
            <EmptyState 
                title="No favorites found"
                subtitle="Looks like you have no favorite listings"
            />
        ) 
    }

    const currentUser = await getCurrentUser();
    return (
        <FavoritesClient 
            listings={favoriteListings}
            currentUser={currentUser}
        />
    )

}

export default FavoritesPage;