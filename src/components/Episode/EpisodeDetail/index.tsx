import { FC } from "react";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";

import {
  Container,
  BannerImage,
  ContentBody,
  EpisodeInfo,
  SeasonAndEpisode,
  Name,
  EpisodeDates,
  Duration,
  Airdate,
  ContentFooter,
  Summary,
  Button,
  Line,
  BannerImagePlaceholder,
} from "./style";

interface EpisodeProps {
  episode: {
    id?: number;
    name: string;
    summary: string;
    season: number;
    number: number;
    airdate: string;
    airtime: string;
    runtime: number;
    image: {
      original: string;
      medium: string;
    };
  };
}

const EpisodeDetail: FC<EpisodeProps> = ({ episode }) => {
  const { name, summary, season, number, airdate, runtime, image } = episode;

  const seasonNumber = season.toString().length === 1 ? `0${season}` : season;
  const episodeNumber = number.toString().length === 1 ? `0${number}` : number;

  return (
    <Container>
      {!!image?.original ? (
        <BannerImage src={image?.original} alt='episode banner' />
      ) : (
        <BannerImagePlaceholder />
      )}
      <ContentBody>
        <EpisodeInfo>
          <SeasonAndEpisode>{`Season ${seasonNumber} | E${episodeNumber}`}</SeasonAndEpisode>
          <Name>{name}</Name>
        </EpisodeInfo>
        <EpisodeDates>
          <Duration>
            Episode Time: <span className='bold'>{runtime}min</span>
          </Duration>
          <Airdate>
            Airdate: <span>{airdate}</span>
          </Airdate>
        </EpisodeDates>
      </ContentBody>
      <ContentFooter>
        <Summary>
          <HTMLEllipsis
            unsafeHTML={summary}
            maxLine='3'
            ellipsis='...'
            basedOn='letters'
          />
        </Summary>
        <Button>Watch Now</Button>
      </ContentFooter>
      <Line />
    </Container>
  );
};

export { EpisodeDetail };
