import gql from "graphql-tag";

export const LauchMissionInfo = gql`
  query LauchMissionInfo($id: String!) {
    launch(id: $id) {
      mission_name
      launch_year
      launch_success
      details
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
      }
    }
  }
`;
