import logo from './favicon.ico';

export default function Blogs() {
    return <div class="blogs-tab">
    <h1>Our Latest Posts</h1>
    <ul>
      <li>
        <a href="#">
          <img src={logo} alt="Blog post image"></img>
          <h2>Post Title 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapien eu ligula ullamcorper venenatis.</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src={logo} alt="Blog post image"></img>
          <h2>Post Title 2</h2>
          <p>Proin sodales, quam vel hendrerit bibendum, nisi velit commodo ex, non vehicula sem odio eu ante.</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src={logo} alt="Blog post image"></img>
          <h2>Post Title 3</h2>
          <p>Nam sagittis risus vitae urna finibus mollis. Nullam vel pharetra augue. Sed pellentesque, est a tristique luctus, mauris purus ornare felis, ac ullamcorper odio ipsum vel massa.</p>
        </a>
      </li>
    </ul>
  </div>
}