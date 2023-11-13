import styled from 'styled-components'

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoSongsText = styled.p`
  font-family: 'Roboto';
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`

export const ArtistBag = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 450px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 100px;
`

export const ArtistName = styled.h1`
  font-family: 'Roboto';
  color: #fff;
  font-size: 42px;
  font-weight: bold;
`

export const PlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`

export const PlayListHeading = styled.h1`
  font-family: 'Roboto';
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`

export const SearchInput = styled.input`
  height: 30px;
  width: 1%;
  padding-left: 15px;
  color: #cbd5e1;
  border: 1px solid #fff;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const MusicList = styled.ul`
   padding: 0px;
   margin-left; 50px;
   margin-right: 50px;
`

export const ArtistInfo = styled.p`
  font-family: 'Roboto';
  color: #fff;
  font-size: 32px;
  font-weight: 400;
`
