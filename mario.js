printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
//function printPyramid(height) {
//    console.log("Uh oh... the pyramid is under construction.");
//    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
    // print that pyramid!
//}
function printPyramid(height) {
for (var brick = "##"; brick.length <= height + 1; brick+="#")
{
  for(var blank=" "; blank.length <= height - brick.length + 1; blank += " ")
  {}

    console.log(blank+brick)
  }
}
