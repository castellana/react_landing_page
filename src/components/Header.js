const Header = () => {
    return ( 
        <header>
            <h2>Hello There</h2>
            <h1 className="main-title">We are Glint</h1>
            <hr/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quos, dolorum fuga dignissimos eveniet id atque veniam, at aperiam excepturi non deleniti quis, dolores eius quae assumenda nemo? Mollitia nesciunt impedit consectetur, doloremque ipsum ipsa doloribus debitis commodi dignissimos, eveniet pariatur, sit deserunt quae alias labore deleniti totam harum repellat.</p>

            <section id="facts-group">
                <article className="facts">
                    <h3 className="main-title">127</h3>
                    <p>Award Received</p>
                </article>  

                <article className="facts">
                    <h3 className="main-title">1505</h3>
                    <p>Cups of Coffee</p>
                </article>  

                <article className="facts">
                    <h3 className="main-title">109</h3>
                    <p>Projects Completed</p>
                </article>  

                <article className="facts">
                    <h3 className="main-title">102</h3>
                    <p>Happy Clients</p>
                </article>  
            </section>

        </header>
     );
}
 
export default Header;