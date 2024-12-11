import MovieDetail from "@/components/movieDetail/MovieDetail";

export default function MovieDetailPage({ params }: { params: { id: string } }) {
	return <MovieDetail movieId={params.id} />;
}