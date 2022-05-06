// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]
#![allow(unused_imports)]

use corecontracts::*;
use wasmlib::*;

use crate::consts::*;
use crate::state::*;

mod consts;
mod contract;
mod state;

mod corecontracts;

const EXPORT_MAP: ScExportMap = ScExportMap {
    names: &[
	],
    funcs: &[
	],
    views: &[
	],
};

#[no_mangle]
fn on_call(index: i32) {
	ScExports::call(index, &EXPORT_MAP);
}

#[no_mangle]
fn on_load() {
    ScExports::export(&EXPORT_MAP);
}
