import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "../components/trips/TripsClient";
import getListings from "../actions/getListings";
import PropertiesClient from "../components/properties/PropertiesClient";

const PropertiesPage = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return (
            <EmptyState 
                title="Unauthorized"
                subtitle="Please login"
            />
        )
    }

    const listings = await getListings({userId: currentUser.id});
    if (listings.length === 0) {
        return (
            <EmptyState 
                title="No properties found"
                subtitle="Looks like you have no properties"
            />
        )
    }

    return (
        <PropertiesClient  
            listings={listings}
            currentUser={currentUser}
        />
    )
}

export default PropertiesPage;