// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]
#![allow(unused_imports)]

use crate::coreaccounts::*;
use crate::*;

#[derive(Clone)]
pub struct MapAgentIDToImmutableBytes {
	pub(crate) proxy: Proxy,
}

impl MapAgentIDToImmutableBytes {
    pub fn get_bytes(&self, key: &ScAgentID) -> ScImmutableBytes {
        ScImmutableBytes::new(self.proxy.key(&agent_id_to_bytes(key)))
    }
}

#[derive(Clone)]
pub struct ImmutableAccountsResults {
	pub(crate) proxy: Proxy,
}

impl ImmutableAccountsResults {
    pub fn agents(&self) -> MapAgentIDToImmutableBytes {
		MapAgentIDToImmutableBytes { proxy: self.proxy.clone() }
	}
}

#[derive(Clone)]
pub struct MapAgentIDToMutableBytes {
	pub(crate) proxy: Proxy,
}

impl MapAgentIDToMutableBytes {
    pub fn clear(&self) {
        self.proxy.clear_map();
    }

    pub fn get_bytes(&self, key: &ScAgentID) -> ScMutableBytes {
        ScMutableBytes::new(self.proxy.key(&agent_id_to_bytes(key)))
    }
}

#[derive(Clone)]
pub struct MutableAccountsResults {
	pub(crate) proxy: Proxy,
}

impl MutableAccountsResults {
    pub fn agents(&self) -> MapAgentIDToMutableBytes {
		MapAgentIDToMutableBytes { proxy: self.proxy.clone() }
	}
}

#[derive(Clone)]
pub struct MapColorToImmutableInt64 {
	pub(crate) proxy: Proxy,
}

impl MapColorToImmutableInt64 {
    pub fn get_int64(&self, key: &ScColor) -> ScImmutableInt64 {
        ScImmutableInt64::new(self.proxy.key(&color_to_bytes(key)))
    }
}

#[derive(Clone)]
pub struct ImmutableBalanceResults {
	pub(crate) proxy: Proxy,
}

impl ImmutableBalanceResults {
    pub fn balances(&self) -> MapColorToImmutableInt64 {
		MapColorToImmutableInt64 { proxy: self.proxy.clone() }
	}
}

#[derive(Clone)]
pub struct MapColorToMutableInt64 {
	pub(crate) proxy: Proxy,
}

impl MapColorToMutableInt64 {
    pub fn clear(&self) {
        self.proxy.clear_map();
    }

    pub fn get_int64(&self, key: &ScColor) -> ScMutableInt64 {
        ScMutableInt64::new(self.proxy.key(&color_to_bytes(key)))
    }
}

#[derive(Clone)]
pub struct MutableBalanceResults {
	pub(crate) proxy: Proxy,
}

impl MutableBalanceResults {
    pub fn balances(&self) -> MapColorToMutableInt64 {
		MapColorToMutableInt64 { proxy: self.proxy.clone() }
	}
}

#[derive(Clone)]
pub struct ImmutableGetAccountNonceResults {
	pub(crate) proxy: Proxy,
}

impl ImmutableGetAccountNonceResults {
    pub fn account_nonce(&self) -> ScImmutableInt64 {
		ScImmutableInt64::new(self.proxy.root(RESULT_ACCOUNT_NONCE))
	}
}

#[derive(Clone)]
pub struct MutableGetAccountNonceResults {
	pub(crate) proxy: Proxy,
}

impl MutableGetAccountNonceResults {
    pub fn account_nonce(&self) -> ScMutableInt64 {
		ScMutableInt64::new(self.proxy.root(RESULT_ACCOUNT_NONCE))
	}
}

#[derive(Clone)]
pub struct ImmutableTotalAssetsResults {
	pub(crate) proxy: Proxy,
}

impl ImmutableTotalAssetsResults {
    pub fn balances(&self) -> MapColorToImmutableInt64 {
		MapColorToImmutableInt64 { proxy: self.proxy.clone() }
	}
}

#[derive(Clone)]
pub struct MutableTotalAssetsResults {
	pub(crate) proxy: Proxy,
}

impl MutableTotalAssetsResults {
    pub fn balances(&self) -> MapColorToMutableInt64 {
		MapColorToMutableInt64 { proxy: self.proxy.clone() }
	}
}