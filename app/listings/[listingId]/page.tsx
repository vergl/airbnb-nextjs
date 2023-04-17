import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ListingClient from "@/app/components/listings/ListingClient";
import EmptyState from "@/app/components/EmptyState";

interface IParams {
    listingId?: string,
}

const ListingPage = async ({ params }: { params: IParams }) => {
    const listing = await getListingById(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return <EmptyState />
    }

    return (
        <ListingClient
            listing={listing}
            currentUser={currentUser}
        />
    )
}

export default ListingPage;