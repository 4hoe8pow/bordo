pub mod championships;
use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct ChampionshipInput {
  pub championshipId : u32,
  pub id : u32,
  pub nextMatchId : u32,
  pub oakId :u32,
  pub oakScore :u8,
  pub willowId: u32,
  pub willowScore: u8
}

