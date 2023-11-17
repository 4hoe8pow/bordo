use wasm_bindgen::prelude::*;

use crate::dto::ChampionshipInput;
mod dto;

macro_rules! console_log {
    // Note that this is using the `log` function imported above during
    // `bare_bones`
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

#[wasm_bindgen]
pub fn receive_championship_input_from_ts(val: JsValue) {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();

    let championship_input: Vec<ChampionshipInput> = serde_wasm_bindgen::from_value(val).unwrap();
    console_log!("{:?}", championship_input);
}
