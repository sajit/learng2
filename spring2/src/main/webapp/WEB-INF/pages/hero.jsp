<ul>
    Heroes list
    <li></li>
</ul>
<form action="/hero"  method="post">
    <label for="hero_id">ID:</label> <input id="hero_id" type="number" name="id" placeholder="ID" value="${hero.id}" /> <br/>
    <label for="hero_name">Name:</label> <input id="hero_name" type="text" name="name" placeholder="name"
        value="${hero.name}"/><br/>
    <input type="submit" value="Create"/>
</form>