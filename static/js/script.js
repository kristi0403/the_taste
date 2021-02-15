$(document).ready(function () {
    $('.sidenav').sidenav();
    $('select').formSelect();
    $('input#input_text, textarea#textarea2').characterCounter();
    $('.collapsible').collapsible();
    $('.modal').modal();
    const $tableID = $('#table');
    const newTr = `
    <tr class="hide">
        <td class="pt-3-half" contenteditable="true"><i class="fas fa-receipt prefix"></i>
                    <input id="ingredient_name" name="ingredient_name" type="text" minlength="2" maxlength="25"
                        pattern="^[a-zA-Z /]{2,25}$" class="validate" ></td>
            <td class="pt-3-half" contenteditable="true"><i class="fas fa-weight prefix"></i>
                    <input id="ingredient_quantity" name="ingredient_quantity" type="text" minlength="1" maxlength="25"
                        pattern="^[a-zA-Z0-9 /]{1,25}$" class="validate" ></td>
            <td>
            <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light">Remove</button></span>
        </td>
    </tr>`;

    $('.table-add').on('click', 'i', () => {

        const $clone = $tableID.find('tbody tr').last().clone(true).removeClass('hide table-line');

        if ($tableID.find('tbody tr').length === 0) {

            $('tbody').append(newTr);
        }

        $tableID.find('table').append($clone);
    });

    $tableID.on('click', '.table-remove', function () {

        $(this).parents('tr').detach();
    });

    $tableID.on('click', '.table-up', function () {

        const $row = $(this).parents('tr');

        if ($row.index() === 0) {
            return;
        }

        $row.prev().before($row.get(0));
    });

    $tableID.on('click', '.table-down', function () {

        const $row = $(this).parents('tr');
        $row.next().after($row.get(0));
    });

});