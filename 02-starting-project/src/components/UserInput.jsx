export const UserInput = () => {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">INITIAL INVESTMENT</label>
                    <input type="text" />
                </p>
                <p>
                    <label htmlFor="">ANNUAL INVESTMENT</label>
                    <input type="text" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">EXPECTED RETURN</label>
                    <input type="text" />
                </p>
                <p>
                    <label htmlFor="">DURATION</label>
                    <input type="text" />
                </p>
            </div>
        </section>
    );
}