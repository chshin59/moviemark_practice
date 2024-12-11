"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { getMovieDetail } from "@/api/movie";

interface MovieDetailProps {
  movieId: string;
}

export default function MovieDetail({ movieId }: MovieDetailProps) {
	const { data: movie } = useQuery({
		queryKey: ["movieDetail", movieId],
		queryFn: () => getMovieDetail(movieId),
	});

	if (!movie) return;

	return (
		<div>
			<div className="relative w-[250px] rounded-lg overflow-hidden">
				<Image
					src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
					alt={movie?.korean_title}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
		</div>
	);
}