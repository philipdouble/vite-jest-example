import Dashboard from "../src/views/DashboardView.vue";
import { mount } from "@vue/test-utils";

jest.mock("@vueuse/head");

test("Clicking the dashboard button 'Hello World!' invokes a callback with hello, world message", () => {
  const wrapper = mount(Dashboard);
  wrapper.find("#hello-world-button").trigger("click");

  const helloWorldEvent = wrapper.emitted("clickHello");

  expect(helloWorldEvent?.[0]).toEqual(["Hello, World!"]);
});

