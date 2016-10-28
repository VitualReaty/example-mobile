export const link = `
<mn-tab-bar>
  <mn-tab-pane title="Home" icon="ios-home" link="/"></mn-tab-pane>
  <mn-tab-pane title="Icon" link="/components/icon"></mn-tab-pane>
  <mn-tab-pane icon="social-buffer" link="/components/popup"></mn-tab-pane>
</mn-tab-bar>
`

export const select = `
<mn-tab-bar :selected="2">
  <mn-tab-pane title="Home" icon="ios-home" show>
    <p class="example">This is title & icon.</p>
  </mn-tab-pane>
  <mn-tab-pane title="Home" show>
    <p class="example">This is only title.</p>
  </mn-tab-pane>
  <mn-tab-pane icon="ios-home" show>
    <p class="example">This is only icon.</p>
  </mn-tab-pane>
</mn-tab-bar>
`