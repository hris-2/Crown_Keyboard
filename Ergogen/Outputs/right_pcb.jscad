function right_pcb_extrude_1_outline_fn(){
    return new CSG.Path2D([[306.1,-134],[247.9,-134]]).appendArc([240,-141.9],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([240,-142.1]).appendArc([232.1,-150],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([212.9870259,-150]).appendArc([207.7602153,-151.9762806],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([195.2397847,-163.0237194]).appendArc([190.0129741,-165],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([177.9,-165]).appendArc([170,-157.1],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([170,-20.9]).appendArc([177.9,-13],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([269.1,-13]).appendArc([277,-20.9],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([277,-22.1]).appendArc([284.9,-30],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([306.1,-30]).appendArc([314,-37.9],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([314,-126.1]).appendArc([306.1,-134],{"radius":7.9,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[183.5,-107.2845],"radius":2.2})
.union(
    CAG.circle({"center":[226.366459,-144.4216049],"radius":2.2})
).union(
    CAG.circle({"center":[262,-125.427],"radius":2.2})
).union(
    CAG.circle({"center":[183.5,-65.1845],"radius":2.2})
).union(
    CAG.circle({"center":[205,-19.0845],"radius":2.2})
).union(
    CAG.circle({"center":[276,-30.8],"radius":2.2})
)).extrude({ offset: [0, 0, 1] });
}




                function right_pcb_case_fn() {
                    

                // creating part 0 of case right_pcb
                let right_pcb__part_0 = right_pcb_extrude_1_outline_fn();

                // make sure that rotations are relative
                let right_pcb__part_0_bounds = right_pcb__part_0.getBounds();
                let right_pcb__part_0_x = right_pcb__part_0_bounds[0].x + (right_pcb__part_0_bounds[1].x - right_pcb__part_0_bounds[0].x) / 2
                let right_pcb__part_0_y = right_pcb__part_0_bounds[0].y + (right_pcb__part_0_bounds[1].y - right_pcb__part_0_bounds[0].y) / 2
                right_pcb__part_0 = translate([-right_pcb__part_0_x, -right_pcb__part_0_y, 0], right_pcb__part_0);
                right_pcb__part_0 = rotate([0,0,0], right_pcb__part_0);
                right_pcb__part_0 = translate([right_pcb__part_0_x, right_pcb__part_0_y, 0], right_pcb__part_0);

                right_pcb__part_0 = translate([0,0,0], right_pcb__part_0);
                let result = right_pcb__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return right_pcb_case_fn();
            }

        