import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {useGetSongRelatedQuery} from "../redux/services/ShazamCore";


const SongDetails = () => {
    const dispatch = useDispatch()
    const {songid} = useParams()
    const {activeSong, isPlaying} = useSelector((state) => state.player)
    const {data, isFetching: isFetchingRelatedSongs, error} = useGetSongRelatedQuery({songid})

   if(isFetchingRelatedSongs) return <Loader title="Searching Song details" />
   if(error) return <Error/> 


   const handlePauseSong = () => {
    dispatch(playPause(false))
  }

  const handlePlaySong = (song, i) => {
    dispatch(setActiveSong({song, data, i}))
    dispatch(playPause(true))
  }

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId="" songData=""/>
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
                <div className="mt-5">

                </div>
            </div>

            <RelatedSongs
                data={data}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseSong}
                handlePlayClick={handlePlaySong}
            />
        </div>
    )
}

export default SongDetails;
