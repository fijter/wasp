// COPYRIGHT OF A TEST SCHEMA DEFINITION 1
// COPYRIGHT OF A TEST SCHEMA DEFINITION 2


// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]

use wasmlib::*;
use crate::*;

pub struct TestFunc1Call {
	pub func: ScFunc,
	pub params: MutableTestFunc1Params,
	pub results: ImmutableTestFunc1Results,
}

pub struct TestView1Call {
	pub func: ScView,
	pub params: MutableTestView1Params,
	pub results: ImmutableTestView1Results,
}

pub struct ScFuncs {
}

impl ScFuncs {
	// comment for TestFunc1 1
    pub fn test_func1(_ctx: &dyn ScFuncCallContext) -> TestFunc1Call {
        let mut f = TestFunc1Call {
            func: ScFunc::new(HSC_NAME, HFUNC_TEST_FUNC1),
            params: MutableTestFunc1Params { proxy: Proxy::nil() },
            results: ImmutableTestFunc1Results { proxy: Proxy::nil() },
        };
        ScFunc::link_params(&mut f.params.proxy, &f.func);
        ScFunc::link_results(&mut f.results.proxy, &f.func);
        f
    }

	// comment for TestView1
    pub fn test_view1(_ctx: &dyn ScViewCallContext) -> TestView1Call {
        let mut f = TestView1Call {
            func: ScView::new(HSC_NAME, HVIEW_TEST_VIEW1),
            params: MutableTestView1Params { proxy: Proxy::nil() },
            results: ImmutableTestView1Results { proxy: Proxy::nil() },
        };
        ScView::link_params(&mut f.params.proxy, &f.func);
        ScView::link_results(&mut f.results.proxy, &f.func);
        f
    }
}
