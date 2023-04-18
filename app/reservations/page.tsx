import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationClient from "../components/reservations/ReservationClient";

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return (
            <EmptyState 
                title="Unauthorized"
                subtitle="Please login"
            />
        )
    }

    const reservations = await getReservations({authorId: currentUser.id});

    if (reservations.length === 0) {
        return (
            <EmptyState 
                title="No reservations found"
                subtitle="Looks like you don't have reservations on your properties"
            />
        )
    }

    return (
        <ReservationClient 
            reservations={reservations}
            currentUser={currentUser}
        />
    )
}

export default ReservationsPage;