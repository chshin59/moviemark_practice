"use client";

import { useQuery } from "@tanstack/react-query";

import { getMovieDetail } from "@/api/movie";

interface MovieDetailProps {
  movieId: string;
}

export default function MovieDetail({ movieId }: MovieDetailProps) {
	const { data: movie } = useQuery({
		queryKey: ["movieDetail", movieId],
		queryFn: () => getMovieDetail(movieId),
	});

	return (
		<div>
			<div className="text-white">
				{JSON.stringify(movie)}
			</div>
		</div>
	);
}