// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]
#![allow(unused_imports)]

use wasmlib::*;
use wasmlib::host::*;

use crate::*;
use crate::keys::*;

#[derive(Clone, Copy)]
pub struct ImmutableDonateParams {
    pub(crate) id: i32,
}

impl ImmutableDonateParams {
    pub fn feedback(&self) -> ScImmutableString {
		ScImmutableString::new(self.id, idx_map(IDX_PARAM_FEEDBACK))
	}
}

#[derive(Clone, Copy)]
pub struct MutableDonateParams {
    pub(crate) id: i32,
}

impl MutableDonateParams {
    pub fn feedback(&self) -> ScMutableString {
		ScMutableString::new(self.id, idx_map(IDX_PARAM_FEEDBACK))
	}
}

#[derive(Clone, Copy)]
pub struct ImmutableWithdrawParams {
    pub(crate) id: i32,
}

impl ImmutableWithdrawParams {
    pub fn amount(&self) -> ScImmutableInt64 {
		ScImmutableInt64::new(self.id, idx_map(IDX_PARAM_AMOUNT))
	}
}

#[derive(Clone, Copy)]
pub struct MutableWithdrawParams {
    pub(crate) id: i32,
}

impl MutableWithdrawParams {
    pub fn amount(&self) -> ScMutableInt64 {
		ScMutableInt64::new(self.id, idx_map(IDX_PARAM_AMOUNT))
	}
}

#[derive(Clone, Copy)]
pub struct ImmutableDonationParams {
    pub(crate) id: i32,
}

impl ImmutableDonationParams {
    pub fn nr(&self) -> ScImmutableInt64 {
		ScImmutableInt64::new(self.id, idx_map(IDX_PARAM_NR))
	}
}

#[derive(Clone, Copy)]
pub struct MutableDonationParams {
    pub(crate) id: i32,
}

impl MutableDonationParams {
    pub fn nr(&self) -> ScMutableInt64 {
		ScMutableInt64::new(self.id, idx_map(IDX_PARAM_NR))
	}
}
