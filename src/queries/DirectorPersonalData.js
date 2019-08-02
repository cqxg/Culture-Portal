import { graphql } from 'gatsby';

export const DirectorPersonalDataFragmentBe = graphql`
  fragment DirectorPersonalDataBe on DirectorsJsonBe {
    name
    bio
    films {
      filmName
      filmYear
    }
    location
    timeline {
      description
      time
    }
    video
    yearsOfLife
  }
`;

export const DirectorPersonalDataFragmentEn = graphql`
  fragment DirectorPersonalDataEn on DirectorsJsonEn {
    name
    bio
    films {
      filmName
      filmYear
    }
    location
    timeline {
      description
      time
    }
    video
    yearsOfLife
  }
`;

export const DirectorPersonalDataFragmentRu = graphql`
  fragment DirectorPersonalDataRu on DirectorsJsonRu {
    name
    bio
    films {
      filmName
      filmYear
    }
    location
    timeline {
      description
      time
    }
    video
    yearsOfLife
  }
`;
