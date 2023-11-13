import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicListItem,
  TrackInfoContainer,
  MusicTrackImage,
  NameGenreContainer,
  Name,
  Genre,
  DurationContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicItem = props => {
  const {musicDetails, onClickDeleteTrack} = props
  const {imageUrl, name, genre, duration, id} = musicDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <MusicListItem>
      <TrackInfoContainer>
        <MusicTrackImage src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
      </TrackInfoContainer>
      <DurationContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          onClick={onDeleteTrack}
          data-testid="delete"
        >
          <AiOutlineDelete size={25} />
        </DeleteButton>
      </DurationContainer>
    </MusicListItem>
  )
}

export default MusicItem
